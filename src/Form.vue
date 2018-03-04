<template>
    <div class="wrapper">
        <h3>{{ title }}</h3>
        <form action="" v-on:submit.prevent="deleteElement">


            <form-input v-for="(input, index) in inputs" :input="input" :state="state" :index="index"
            @blur="blur()" @focus="focus()"

            :key="'component-input' + index"></form-input>



            <button class="btn btn-success" type="submit" >Сохранить</button>
            <a href="">Показать</a>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                title: 'Форма для обучения',
                state: false,
                inputs: [
                    {
                        type: 'email',
                        name: 'email',
                        label: 'Email',
                        validate: {
                            on: true,
                            type: ['email', 'required']
                        }
                    },
                    {
                        type: 'text',
                        name: 'firstName',
                        label: 'Имя',
                        validate: {
                            on: true,
                            type: ['required']
                        }
                    },
                    {
                        type: 'text',
                        name: 'lastName',
                        label: 'Фамилия',
                        validate: {
                            on: true,
                            type: ['required']
                        }
                    },
                    {
                        type: 'password',
                        name: 'password',
                        label: 'Пароль',
                        validate: {
                            on: true,
                            type: ['required']
                        }
                    },
                    {
                        type: 'password',
                        name: 'passwordRepeat',
                        label: 'Повторите пароль',
                        validate: {
                            on: true,
                            type: ['required']
                        }
                    },
                ]
            }
        },
        methods: {
            some(){
                alert(1)
            },
            blur(){
                console.log('parent');
                this.state = false;
            },
            focus(){
                this.state = true;
            }

        }
    }

</script>

<style scoped>
    .wrapper {
        max-width: 700px;
        margin: 20px auto;
    }

    h3 {
        text-align: center;
    }



</style>