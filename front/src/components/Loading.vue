<template>        
    <div>
        <slot>

            <div class="container">
                <div class="loading"/>
                <span>Carregando...</span>
            </div>

        </slot>
    </div>
</template>

<style scoped>

.container{
    display:flex;
    flex-direction: column;
}

span{
    padding-top:5px;
}

.loading{
    display:block;

    width:15px;
    height:15px;
    border-radius:100%;

    border:4px solid #1abc9c;
    border-top:4px solid transparent;

    animation-name:rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration:0.75s;
}

@keyframes rotate{
  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }  
}

</style>