<template>
    <div class="demo1">
      <!--<div v-show="false">{{message}}</div>-->
      <!--<div v-text="message"></div>-->
      <div v-html="num"></div>
      <!--<div v-if="num < 0">哎呦喂</div>-->
      <!--<div v-else-if="num < 10">迪卡龙</div>-->
      <!--<div v-else>是电饭锅水电费</div>-->
      <!--<div v-for="(item,index) in list" :key="index">-->
        <!--<span>姓名:{{item.name}}</span>,-->
        <!--<span>年龄:{{item.age}}</span>-->
      <!--</div>-->
      <!--<input type="text" v-model="message"/>-->
      <!--<button @click="add">加一</button>-->
      <!--<div>{{message.split('').reverse().join('')}}</div>-->
      <div>{{reversedMessage }}</div>
      <div>{{reversedMessage1()}}</div>
      <button @click="obj1.nums++">商品1数量加一</button>
      <div>总价：{{all}}</div>
      <div>名字:{{fullName}}</div>
      <input v-model="firstName"/>

      <div>长度：{{message.length}}</div>
      <input v-model="message"/>
    </div>
</template>

<script>
    export default {
        name: "demo1",
      data(){
          return{
            message: '大宝贝',
            num: 5,
            list:[
              {name: '张三', age: 22},
              {name: '李四', age: 10},
              {name: '王五', age: 54},
              {name: '赵六', age: 99},
            ],
            obj1:{
              price: 10,
              nums: 10
            },
            obj2:{
              price: 15,
              nums: 5
            },
            firstName: 'Tom',
            secondName: 'jack'
          }
      },
      watch: {
        message (newVal, oldVal) {
          console.log(newVal,oldVal)
        }
      },
      computed:{
        reversedMessage (){//而使用计算属性，只要title没变，页面渲染是不会重新进这里来计算的，而是使用了缓存。
          return this.message.split('').reverse().join('')
        },
        all () {
          return this.obj1.price*this.obj1.nums+this.obj2.price*this.obj2.nums
        },
        /*fullName: {
          get () {
            return this.firstName+ ' '+ this.secondName
          },
          set(newValue) {
            console.log(newValue)
            var names = newValue.split(' ');
            this.firstName = names[0];
            this.secondName = names[names.length - 1];
          }
        }*/
        fullName () {
          return this.firstName + ' ' + this.secondName
        }
      },
      methods: {
        add () {
          this.num++
        },
        reversedMessage1() {//点击补充货物，也会进这个方法，再次计算。不是刷新，而是只要页面渲染，就会进方法里重新计算。
          console.log(111)
          return this.message.split('').reverse().join('')
        }
      }
    }
</script>

<style scoped>

</style>
