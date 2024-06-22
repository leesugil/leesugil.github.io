---
layout: single
title:  "Loading Built-in Image Data in TensorFlow"
permalink:
date:   2024-05-30 21:00:00 -0400
categories: [artificial intelligence]
tags: [tech, tutorials, lecture, note, introduction, machine learning, deep learning, artificial intelligence, stem, math, recitation, tip, tensorflow, python, parameter, weight, activation function, recurrent, neural, network]
mermaid: true
---

Here's a little baby addendum to the image loading guidlines, this time simply
accessing its built-in datasets.

The official TensorFlow [tutorial document](https://www.tensorflow.org/tutorials/load_data/images){:target="_blank"} explains how to load image data to TensorFlow.

In the [previous post]({{ site.baseurl }}/artificial%20intelligence/2024/05/23/loading-images-in-tensorflow-advanced.html){:target="_blank"}, I re-wrote the second half of the tutorial in aiming explaining what's about basic Python file handling and what's specific to TensorFlow.

It explains the overall process of defining a `(img, label)` form of data.

## TensorFlow Built-in Datasets

Here's a [way to load built-in datasets quickly](https://colab.research.google.com/drive/1xRgy1J3cG9b3NV9gYzNddoe30RtdfFjm?usp=sharing){:target="_blank"}.

They're all part of the "hello, world!" experience of machine-learning, hope it
helps to recall how to access them quickly.
