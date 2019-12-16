<template>
    <div>
        <div class="progbar">
            <span class="textwhite ">{{lang}}</span>
            <progress class="progress is-small is-primary progbartitle" :value="score" max="100">15%</progress>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        lang : "",
        score:""
    }
}
</script>