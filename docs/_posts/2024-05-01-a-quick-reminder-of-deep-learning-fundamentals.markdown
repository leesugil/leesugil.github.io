---
layout: single
title:  "A Quick Reminder of Deep Learning Fundamentals"
date:   2024-05-01 11:09:00 -0400
categories: [artificial intelligence]
tags: [tech, tutorials, lecture, note, introduction, machine learning, deep learning, artificial intelligence, stem, math]
mermaid: true
toc: true
toc_icon: "cog"
---
Here's a quick reminder of the simple and fundamental concepts in deep learning and neural network.

## Table of Contents

1. [Perceptron](#perceptron)
2. [Single Hidden-Layer Model](#singlehiddenlayermodel)
3. [Loss and Objective Function](#lossandobjectivefunction)
4. [Gradient Descent](#gradientdescent)
5. [Back Propagation](#backpropagation)
6. [Learning Rate](#learningrate)
7. [Overfitting and Regularization](#overfittingandregularization)

## Perceptron {#perceptron}

![Perceptron]({{ '/assets/images/perceptron.svg' | relative_url }})

Perceptron is the basic building block algorithm of neural network.

$$
\large{
\begin{align*}
\hat{y} &= g(w_0 + \sum_{i=1}^n x_i w_i) \\
        &= g(w_0 + X^T W)
\end{align*}
}
$$

where $x_i$'s are input data, $w_i$'s are weights with $w_0$ being a shift, and $g$ is an activation function.

Activation functions make the model non-linear.

# Activation Functions
- Sigmoid
- Hyperbolic Tangent
- ReLU (Rectified Linear Unit)

## Single Hidden-Layer Model {#singlehiddenlayermodel}

![Perceptron]({{ '/assets/images/single-layer-nn.svg' | relative_url }})

Let $$X = (x_i)_{i=1}^{d_1}$$ be the input vector, $$Z = (z_j)_{j=1}^{d_2}$$ and $$\hat{Z} = (\hat{z})_{j=1}^{d_2} = (g(z_j))_{j=1}^{d_2}$$ the hidden layer variable vectors, and $$Y = (\hat{y}_k)_{k=1}^{d_3}$$ the output vector.

Let $$W^{(1)} = (w_{i, j}^{(1)})$$ be the weights from $$X$$ to $$Z$$, and $$W^{(2)} = (w_{j, k}^{(2)})$$ from $$Z$$ to $$Y$$.

Then

$$
\large{
\begin{align*}
z_j &= w_{0, j}^{(1)} + \sum_{i=1}^{d_1} x_i w_{i, j}^{(1)} \\
        &= w_{0, j}^{(1)} + X^T W_j^{(1)}
\end{align*}
}
$$

and

$$
\large{
\begin{align*}
\hat{y}_j &= g(w_{0, k}^{(2)} + \sum_{j=1}^{d_2} \hat{z_j} w_{j, k}^{(2)}) \\
        &= g(w_{0, k}^{(2)} + {\hat{Z}}^T W_k^{(2)})
\end{align*}
}
$$

in which the goal is to estimate the parameters $$W^{(1)}, W^{(2)}$$ as accurate as possible so that the predicted values $$\hat{y}_k$$ are close to the observed values $$y_k$$.

How close the predicted values are to the actual values is measured by adopting a loss function $$\mathcal{L}$$.

## Loss and Objective Function {#lossandobjectivefunction}

We want to minimize an objective function $$\mathcal{J}$$ measuring the total loss $$\mathcal{L}(\hat{y}_i, y_i)$$ for all $$i = 1, 2, ..., n$$ through finding the optimal parameter

$$
\large{
\begin{align*}
W^{*} &= \underset{W}{\mathrm{arg\,min}}\mathcal{J}(W).
\end{align*}
}
$$


- Empirical Loss

$$
\large{
\begin{align*}
\mathcal{J} &= \frac{1}{n} \sum_{i=1}^{n} \mathcal{L}(\hat{y}_i, y_i)
\end{align*}
}
$$

- Binary Cross Entropy Loss
(for binary clissification)

$$
\large{
\begin{align*}
\mathcal{J} &= -\frac{1}{n} \sum_{i=1}^{n} y_i \log(\hat{y}_i) + (1-y_i) \log(1 - \hat{y}_i)
\end{align*}
}
$$

- Mean Square Error Loss

$$
\large{
\begin{align*}
\mathcal{J} &= \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
\end{align*}
}
$$

## Gradient Descent {#gradientdescent}

- to be updated

## Back Propagation {#backpropagation}

- to be updated

## Learning Rate {#learningrate}

- to be updated

## Overfitting and Regularization {#overfittingandregularization}

- to be updated
