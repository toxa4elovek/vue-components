<template>

    <div class="form-group">
        <transition-group name="list">

            <input v-model="value" :style="style.input" class="list-item" :type="input.type" @blur="blur($event)" @focus="focus()" :name="input.name" :key="'input' + index">

            <label v-if="displayLabel" :style="style.label" @click="labelFocus()" class="list-item" :key="'label' + index">{{ input.label }}</label>

        </transition-group>
    </div>

</template>

<script>
    export default {
        props: ['input', 'state', 'index'],
        data() {
            return {
                displayLabel: true,
                value: null,
                style: {
                    input: '',
                    label: ''
                }
            }
        },
        methods : {
            validate(type){
                this.displayLabel = true;
            },
            focus(type) {
                this.style.label = {
                    transform: 'translateY(-280%)',
                    color:'#17a2b8',
                    'font-size': '1.0rem',
                };

                this.style.input = {
                    'border-bottom': '3px solid #17a2b8'
                };
            },
            blur(e) {
                if (this.value) {
                    return true;
                }

                this.style.label = {
                    transform: 'translateY(-140%)',
                    color: '#9e9e9e',
                    'font-size': '1.3rem',
                };
                this.style.input = {
                    'border-bottom': '1px solid #9e9e9e'
                };
            },
            labelFocus() {
                this.$el.querySelector('input').focus();
            }
        },

    }

</script>

<style scoped>
    input {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid #9e9e9e;
        margin: 10px 0 0 0;
        padding: 0 0 5px 5px;
    }
    label {
        margin: 0 0 0 5px;
        cursor:text;
        color: #9e9e9e;
        font-size: 1.3rem;
        transform: translateY(-140%);
    }

    label, input{
        transition: .1s ease-out;
        transition-property: initial;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
        transition-delay: initial
    }

</style>