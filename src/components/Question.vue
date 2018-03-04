<template>
    <div class="alert">
        <h3>{{ x }} + {{ y }} = ?</h3>
        <div class="buttons">
            <button class="btn btn-success" v-for="answer in answers"
            @click="onAnswer(answer)">
                {{ answer }}
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['settings'],
        data() {
            return {
                x: mtRand(this.settings.from, this.settings.to),
                y: mtRand(this.settings.from, this.settings.to)
            }
        },
        computed: {
            good() {
                return this.x + this.y;
            },
            answers(){
                let answers = [this.good];

                while (answers.length < this.settings.variants) {
                    let num = mtRand(this.good - this.settings.range, this.good + this.settings.range);

                    if (answers.indexOf(num) === -1) {
                        answers.push(num);
                    }
                }

                return answers.sort(function () {
                    return Math.random() > 0.5;
                });
            }

        },
        methods: {
            onAnswer(num) {
                if (num === this.good) {
                    this.$emit('success');
                }else {
                    this.$emit('error', `${this.x} + ${this.y} = ${this.good}!`)
                }
            }
        }
    }

    function mtRand(min, max) {
        let diff = max - min;

        return Math.floor(Math.random() * (diff + 1) + min)
    }

</script>

<style scoped>

    .alert {
        padding-top: 20px;
        background-color: #eee;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
    }

    h3, .btn {
        margin: 20px 0;
        text-align: center;
    }

</style>