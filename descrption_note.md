### GRPC

### 2022-04-30
    - GRPC learning stage
        - RPC
            - Stub
            - Mashalling
            - IDL안
            - osi 7 layer
        - Source of truth
        - http2
        - protocol buffer

### 2022-05-01
    - RPC 기술 이해
        - Stub
            서버가 이해할수있는 형태로 데이터의 캐스티을 진행하고 서버 측 rpc로 호출을 진행
        - Masahlling
            데이터 코드 베이스를 기반으로 가져와 만드는 것이라고 보면 될 것같다. 그래서 주로 marshalling은 다른 언어 혹은 다른 플랫폼에서 서로 데이터를 주고 받을 때 사용한다.
        - IDL
            한 언어에 국한되지 않는 언어 중립적인 방법으로 인터페이스를 표현함으로써, 같은 언어로 사용하지않은 소프트웨어 컴포넌트 사이의 통신을 가능케한다.


### 2022-05-02
    - http2 기술 이해
        - http / http2 차이
        - http2 docs reading

### 2022-05-04
    - GRPC Postman 통신 테스트

### 2022-05-05
    - GRPC Postman 
        - 포스트맨 통신 성공

### 2022-05-06
    - GRPC client ,server structure
        - grpc client nest 서버 기초 구현

### 2022-05-07
    - GRPC client ,server structure
        - GRPC client , server 구동
        - client , server 간 연동 완료
            - test 완료

### 2022-05-08
    - GRPC client reSetting
    - client , server 간 연동 완료
        - test 완료

### 2022-06-06
    - grpc 실무 도입을 위한 설계 방식 검토
        - client 쪽은 여러 grpc server [여러 proto 파일 호출 가능] 호출 가능한 것 같다.
        - 반면 server 쪽은 app 실행을 proto 파일을 주입해서 실행하므로 여러 proto 파일을 가질 수 없다.

## TODO