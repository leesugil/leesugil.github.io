---
layout: post
title:  "Getting Some Hands On Feelings On TensorFlow"
date:   2024-05-02 11:58:00 -0400
categories: [artificial intelligence]
tags: [tech, tutorials, lecture, note, introduction, machine learning, deep learning, artificial intelligence, stem, math, recitation, tip, tensorflow, python, parameter, weight, activation function]
mermaid: true
---
Learning to use a new framework or a library can be overwhelming in the beginning even if you're equipped with theoretical knowledge. You have to learn the interface almost from the scratch each time, if not the language-specific taste of using them 😵 To me, this indeed has always been the case, like learning to use GSL (GNU Scientific Library), SciPy, R, SAS, you name any scientific library... (And sometimes I feel their API isn't exactly meeting my initial taste, have an urge to write my own wrappers or even dreaming of writing the functions that I need from the scratch, but the urge dies out of exhaustion 99.9% of the time 🫠 It's always better to avoid reinventing the wheel and give some trust to those packages that the community has already embraced long time ago.)

Such is the case for machine learning frameworks (TensorFlow, PyTorch), here's a simple TensorFlow example that I derived [from the very first official TensorFlow tutorial](https://www.tensorflow.org/tutorials/quickstart/beginner) that gave me some sense of control over weight parameters.

## Applying Activation Function

Let's think about the moment you apply an activation function to a linear weighted sum of the previous variables. In notations, let's say $$y$$'s are the current variable, $$z$$'s are the variables from the previous layer, and $$g$$ is the activation function of choice in the current layer. Then we have

$$
\large{
\begin{align*}
y_j &= w_{0, k}^{(2)} + \sum_{j=1}^{d_2} \hat{z_j} w_{j, k}^{(2)} \\
        &= w_{0, k}^{(2)} + {\hat{Z}}^T W_k^{(2)}
\end{align*}
}
$$

and

$$
\large{
\begin{align*}
\hat{y}_j &= g(w_{0, k}^{(2)} + {\hat{Z}}^T W_k^{(2)})
\end{align*}
}
$$

We first get $$Y$$ first, and then apply activation function $$g$$ to get $$\hat{Y}$$.

Here's how this can be implemented in TensorFlow in two ways.

# Preparation

First, we import tensorflow and load some data to play with.

```python
import tensorflow as tf
print("TensorFlow version:", tf.__version__)

mnist = tf.keras.datasets.mnist

(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0
```

# Models

We'll define two essentially same models for the comparison.

```python
model1 = tf.keras.models.Sequential([
    tf.keras.layers.Input(shape=(28, 28)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax') # See here
])
model1.build(input_shape=(None, 28, 28))
model1.summary()
```

The first model is designed so that it uses the softmax function as the activation function at the end.

The softmax function turns a vector of $$n$$ real values into a probability distribution of $$n$$ possible outcomes 🥂 This model assumes that the designer understands some extra nature about the problem and what to expect as an outcome (that is, using the softmax function to make exclusive classification).

What if I want to fine-tune the model or want to try experimenting with different activation functions (because, for example, I don't have an assumption about the nature of the outcome, whether it should be a exclusive classification problem or just multi-label classification)? In that case, we can leave out the activation function part at the end of the model, and play with the outcome manually.

```python
model2 = tf.keras.models.Sequential([
    tf.keras.layers.Input(shape=(28, 28)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10) # Using no activation functions, i.e., linear activation
])
model2.build(input_shape=(None, 28, 28))
model2.summary()
```

TensorFlow initializes weights randomly, so let's synchronize weights of the two models for the comparion.

```python
model2.set_weights(model1.get_weights())

for w1, w2 in zip(model1.weights, model2.weights):
    if not tf.reduce_all(w1 == w2):
        print("Weights are different.")
    else:
        print("Weights are identical.")
```

These are two almost identical models with the same weights, the only difference being whether the (softmax) activation function was applied to the outcome at the end or not.

And if that's the case, if we apply the softmax function to the outcome of the second model manually, it should be the same as the outcome of the first model given the same input data.

Let's find it out!

# The Comparison

Here's what we'll compare. Since other conditions are the same but the application of the softmax activation function at the end, the outcome of the first model

$$
\large{
\begin{align*}
\hat{y}_j &= g(w_{0, k}^{(2)} + {\hat{Z}}^T W_k^{(2)})
\end{align*}
}
$$

should be equal to the outcome of the second model combined with the softmax function applied

$$
\large{
\begin{align*}
y_j &= w_{0, k}^{(2)} + {\hat{Z}}^T W_k^{(2)} \\
\hat{y}_j &= g(y_j)
\end{align*}
}
$$

Here's the test code:

```python
dummy = x_train[:1]

predictions2 = model2(dummy).numpy()
print("(model2) logit: ", predictions2)

print("(model2) logit -> softmax: ", tf.nn.softmax(predictions2).numpy())
predictions = model1(dummy).numpy()
print("(model1) softmax: ", predictions)
```

The result will show that they are indeed the same.

This is an example/demonstration of how one can fine-tune models if they don't like the under-the-hood built-in options 🍵 (and also that there's no hidden secret algorithms affecting the outcome when you use this built-in option 😀)
