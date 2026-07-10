---
layout: post
title: "[Python] NumPy의 내장 객체와 배열 생성"
date: 2023-12-29 12:51:58 +0900
categories: python
---

* 목차
{:toc}

넘파이에서 주로 사용하는 객체 속성과 배열 생성 방법을 알아보자. 백문이 불여일견, 코드로 바로 보자.

## NumPy 배열의 내장 객체

| 속성 | 뜻 |
|---|---|
| `shape` | 배열의 형태/크기 |
| `ndim` | 배열의 차원 수 |
| `dtype` | 원소의 데이터 타입 |
| `itemsize` | 원소 하나가 차지하는 메모리 크기(바이트) |
| `size` | 원소의 총 개수 |
| `strides` | 차원별로 다음 원소로 이동하는 데 필요한 바이트 거리 |
| `data` | 실제 원소가 담긴 버퍼의 메모리 주소 |

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5], dtype=float)

print("shape: ", a.shape)
print("ndim: ", a.ndim)
print("dtype: ", a.dtype)
print("itemsize: ", a.itemsize)
print("size: ", a.size)
print("strides: ", a.strides)
print("data: ", a.data)

'''
출력 결과:
shape: (5,)
ndim: 1
dtype: float64
itemsize: 8
size: 5
strides: (8,)
data: <memory at 0x7e19167bc1c0>
'''
```

## 배열 생성

```python
import numpy as np

# 1차원 배열
my1DArray = np.array([1, 2, 3, 4])

# 2차원 배열
my2DArray = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# 3차원 배열
my3DArray = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]])
```

## 특정 값으로 배열 생성

```python
# 1로 채워진 배열
ones = np.ones((3, 4))

# 0으로 채워진 배열
zeros = np.zeros((2, 3, 4), dtype=np.int16)

# 초기화되지 않은 값(쓰레기값)으로 채워진 배열
emptyArray = np.empty((3, 2))

# 지정한 값으로 채워진 배열
fullArray = np.full((2, 2), 7)
```
