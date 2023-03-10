# mvc-pattern

## 게시판 CRUD

### 기간 : 2022.09.22 ~ 2022.09.25 (총 5일)

## 안주영

## 📌 본인 역할

### 백엔드 및 프론트엔드

### 목표 : MVC패턴으로 게시판 페이지 만들기

### MVC 패턴을 사용해야 하는 이유
1. 비지니스 로직과 UI로직을 분리하여 유지보수를 독립적으로 수행가능
2. Model과 View가 다른 컴포넌트들에 종속되지 않아 애플리케이션의 확장성, 유연성에 유리함
3. 중복 코딩의 문제점 제거

### 💢MVC 패턴의 한계

MVC패턴에서 View는 Controller에 연결되어 화면을 구성하는 단위 요소이므로 다수의 View를 가질 수 있다. 
그리고 Model은 Controller를 통해서 View와 연결되지만, Controller에 의해서 하나의 View에 연결될 수 있는 Model도 여러 개가 될 수 있어 View와 Model이 서로 의존성을 띄게 된다. 
즉, Controller에 다수의 Model과 View가 복잡하게 연결되어 있는 상황이 발생할 수 도 있다.

## RESTfull API란?

RESTful API는 두 컴퓨터 시스템이 인터넷을 통해 정보를 안전하게 교환하기 위해 사용하는 인터페이스

- **GET** : 데이터 조회
- **POST** : 데이터 등록 및 전송
- **PUT** : 데이터 수정
- **DELETE** : 데이터 삭제

### REST API의 사용 이유 / 장점

1. REST API의 메시지를 읽는 것 만으로 메시지의 의도를 확실히 파악할 수 있다. (가독성 향상)
2. 클라이언트와 서버는 REST api를 이용해 정보를 주고 받기 떄문에 각자의 역할이 명확하게 나뉘어져 있고 
    이로서 개발자의 업무량 감소 뿐만 아니라 플랫폼의 독립성 확장이라는 효과를 가져올 수 있다.

### 단점

1. HTTP 메서드를 사용해 uri를 표현하기 때문에 다양한 인프라에서 사용이 가능하지만, 메서드 형태가 제한적이라는 단점도 함께 가지고 있다.
2. 표준이 존재하지 않는다.

# 정리 노션링크
https://www.notion.so/79a08add716647d48a7236814f566d73?v=0ce3403bf9c14f4ca97f5d543a937a7e