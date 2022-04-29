<template>
    <div>
        <h1>메모</h1>
        <!--  메모의 아이디와 작성자와 제목 출력 -->
        <table>
            <tr>
                <td>아이디</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="memo in memo" :key="memo.i">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <!-- 타이틀을 눌렀을때 /list/:id 링크로 이동 -->
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
                <!-- 수정 버튼을 눌렀을때, UpdateForm 이동(화면출력)-->
                <td><button @click="$router.push(`/updateform/${memo.id}`)">수정</button></td>
                <!-- 삭제 버튼을 눌렀을때, 삭제할 memo.id를 서버로 전송(데이터) -->
                <td><button @click="deletememo(memo.id)">삭제</button></td>

            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //v-for로 확인하기 위해 배열
            memo : [ {
                id :1,
                title : "첫번째 메모입니다",
                writer : "green"
            }]
        }
    },
    // 컴포지션이 처음 생성될때 값을 가져와야 화면에 출력할수 있다
    created() {
        // axios를 통해 값을 가져옴 - get
        // this.memo에 가져온 값 넣어줌
        this.$http.get('/api/memo')
        .then((response) => {
            // data를 통해서 값 가져올 수 있다.
            console.log(response.data);
            this.memo = response.data
        })
    },
    methods : {
        deletememo(id) {
            // axios를 통해 id값을 가진 memo를 삭제
            this.$http.delete(`/api/memo/${id}`)
            .then((response)=>{
                // 값이 삭제된 메모배열을 다시 할당
                // 서버로 요청해서 값이 삭제되었지만 
                // 화면에 적용하기위해서 메모 배열을 들고옴
                this.memo = response.data
            })
        }
    }
}
</script>