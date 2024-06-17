---
layout: single
title:  "Loading Images in TensorFlow (Basics)"
permalink:
date:   2024-05-16 21:00:00 -0400
categories: [artificial intelligence]
tags: [tech, tutorials, lecture, note, introduction, machine learning, deep learning, artificial intelligence, stem, math, recitation, tip, tensorflow, python, parameter, weight, activation function, recurrent, neural, network]
mermaid: true
---

I wrote my own version of TensorFlow tutorial for leading image data (basics).

The official TensorFlow [tutorial document](https://www.tensorflow.org/tutorials/load_data/images){:target="_blank"} explains how to load image data to TensorFlow.

I have the same tutorial explained in a slightly different way to meet my own taste, like explaining what's about TensorFlow specific, what's about string/path processing in Python in general, etc.

Because I essentially added more comments for beginner's perspective, I had to split the tutorial into two:
- Loading image files into TensorFlow with details auto-tuned by TensorFlow utilities (Basic)
- Loading images files into TensorFlow manually with fine-tuning the details by the user (Advanced)

## Loading Image Data into TensorFlow

Here's the [basic version of the guideline that I wrote in Google Colab](https://colab.research.google.com/drive/1JtNdWPINfdf_AVXcE4xoOOeUJfWWm2oZ?usp=sharing){:target="_blank"}. There will be another posting for the advanced method.

For a quick catch-up, basically `tf.keras.utils` will take care of a lot of things that you'd expect to do get your data prepared for batch-feeding.
- Downloading data file (.tgz) from the Internet URL and extracting it.
- Reading the data file paths, having a list of all the file names to read into the memory.
- Understanding that, if the data is classified with its subfolder tree names, than those class names will be understood by TensorFlow as well.
- Splitting the list of file names into to groups, 'training' and 'validation'.
- Segmentize the data into the batch size so that TensorFlow will read them one batch at a time.

Plus there are some other useful tips like
- How to visualize image files using file paths in `PIL`
- How to visualize image data (RGB-vectors) in `matplotlib`
- How to standardize the image data range from 0~255 to 0~1
