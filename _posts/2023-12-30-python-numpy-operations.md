---
layout: post
title: "Python - Numpy의 연산"
date: 2023-12-30 01:00:16 +0900
categories: python
---

* 목차
{:toc}

numpy 배열 연산은 파이썬의 리스트와 다르다.

아래 코드로 확인 해보자

---

#### Numpy 연산

파이썬의 리스트는 리스트들이 연결되는 반면

넘파이 배열은 기본적으로 배열간의 연산이 적용된다.

```python
import numpy as np

## Python List
x = [85, 90, 50]
y = [95, 50, 75]
z = x + y
## 출력: [85, 90, 50, 95, 50, 75]

## Numpy Array
m = np.array([85, 96, 50])
f = np.array([95, 50, 75])
print("m+f = ", m+f)
print("(m+f)/2 = ", (m+f)/2)
print("m*2 = ", m*2)
print("f+2 = ", f+2)

'''
출력:
    m+f =  [180 146 125]
    (m+f)/2 =  [90.  73.  62.5]
    m*2 =  [170 192 100]
    f+2 =  [97 52 77]
'''
```

#### Numpy 산술 연산 주의점

 1. Shape가 같으면 산술 연산이 가능하다.

```maxima
A = np.ones((3, 4))
print("A Shape:", A.shape)

B = np.random.random((3, 4)) # 0~1보다 작은 범주
print("B Shape:", B.shape)

print(A+B)
```

2. 두개의 배열 중 하나가 1로만 채워져 있다면 Shape가 달라도 산술 연산이 가능하다.

```python
x = np.ones((3, 4))
print(x.shape)

y = np.arange(4)
print(y.shape)

print(x+y)
print(x-y)
```

3. 모든 차원에서 호환이 되는 경우 두개의 배열을 한번에 전체에 적용한다.

```python
x = np.ones((2, 3))
y = np.random.random((2, 1, 3))
## y = np.random.random((10, 1, 8)) #(10, 1, 8) 면 행 열
## y = np.random.random((10, 2, 8)) Error 행이 달라 져서 오류
## y = np.random.random((10, 1, 4)) Error Shape와 호환이 되지 안되서 오류
print(x+y)
```

#### Numpy 사칙 연산 함수

```python
x = np.array([[1, 2, 3], [2, 3, 4]])
y = np.array([[1, 4, 9], [2, 3, -2]])

add = np.add(x, y) # 덧셈 
sub = np.subtract(x, y) # 뺄셈
mul = np.multiply(x, y) # 곱셈
div = np.divide(x,y) # 나눗셈 - 몫
rem = np.remainder(x, y) # 나눗셈 - 나머지

'''
출력: 
add [[ 2  6 12]
     [ 4  6  2]]
sub [[ 0 -2 -6]
     [ 0  0  6]]
mul [[ 1  8 27]
     [ 4  9 -8]]
div [[ 1.          0.5         0.33333333]
     [ 1.          1.         -2.        ]]
rem [[0 2 3]
     [0 0 0]]
 '''
```
