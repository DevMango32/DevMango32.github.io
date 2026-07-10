---
layout: post
title: "[Unity] 유니티 물리엔진(Physics) - Rigidbody 스크립트 제어"
date: 2023-12-28 14:49:03 +0900
categories: unity
---

* 목차
{:toc}

Rigidbody는 스크립트로 속성을 수정하고 움직임을 제어할 수 있다. 백문이 불여일견, 스크립트로 직접 배워보자.

---

## 스크립트로 Rigidbody 컴포넌트 속성 변경하기

```csharp
using UnityEngine;

public class ChangeRigidbodyProperties : MonoBehaviour
{
    public Rigidbody rb; // Rigidbody 변수 선언

    void Start()
    {
        rb = GetComponent<Rigidbody>(); // 해당 게임 오브젝트의 Rigidbody 컴포넌트 가져오기

        rb.mass = 2.0f; // 질량 변경
        rb.drag = 0.5f; // 드래그(저항) 변경
        rb.angularDrag = 0.8f; // 회전 드래그(저항) 변경
        rb.useGravity = true; // 중력 사용 여부 변경
        rb.isKinematic = false; // 물리적 영향을 받는지 여부 변경
        // 움직임 제약 설정
        rb.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ; 
    }
}
```

---

## 스크립트로 Rigidbody 컴포넌트 움직임 제어하기

```csharp
using UnityEngine;

public class RigidbodyController : MonoBehaviour
{
    public float moveSpeed = 5f; // 이동 속도
    public float rotationSpeed = 100f; // 회전 속도

    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        float moveInput = Input.GetAxis("Vertical"); // 전진/후진 입력
        float rotateInput = Input.GetAxis("Horizontal"); // 좌/우 회전 입력
        Move(moveInput);
        Rotate(rotateInput);
    }
}
```

## MovePosition 함수

게임 오브젝트의 위치를 변경한다.

```csharp
void Move(float input)
{
    Vector3 movement = transform.forward * input * moveSpeed * Time.deltaTime;
    rb.MovePosition(rb.position + movement);
}
```

## MoveRotation 함수

게임 오브젝트의 회전을 변경한다.

```csharp
void Rotate(float input)
{
    float rotation = input * rotationSpeed * Time.deltaTime;
    Quaternion deltaRotation = Quaternion.Euler(0f, rotation, 0f);
    rb.MoveRotation(rb.rotation * deltaRotation);
}
```

---

## 스크립트로 Rigidbody 컴포넌트 힘 제어하기

```csharp
using UnityEngine;

public class ApplyForceAndTorque : MonoBehaviour
{
    public Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.F))
        {
            ApplyForce(); // 키보드 F를 누르면 힘을 가하는 함수 호출
        }

        if (Input.GetKeyDown(KeyCode.T))
        {
            ApplyTorque(); // 키보드 T를 누르면 회전력을 가하는 함수 호출
        }
    }
}
```

## AddForce 함수

특정 방향으로 힘을 가한다.

```csharp
void ApplyForce()
{
    Vector3 forceDirection = new Vector3(0f, 10f, 0f); // 힘의 방향 설정 (여기서는 위쪽으로 향하도록 설정)
    rb.AddForce(forceDirection, ForceMode.Impulse); // Impulse 모드로 힘 적용 (충격적인 힘)
}
```

## AddTorque 함수

특정방향으로 회전한다.

```csharp
void ApplyTorque()
{
    Vector3 torque = new Vector3(0f, 5f, 0f); // 회전력 방향 설정 (여기서는 y축을 중심으로 회전력을 적용)
    rb.AddTorque(torque, ForceMode.Impulse); // Impulse 모드로 회전력 적용 (충격적인 회전력)
}
```
