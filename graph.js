// import './style.css';
// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './src/amplifyconfiguration.json';

// import { generateClient } from 'aws-amplify/api';
// import { createTodo } from './src/graphql/mutations';
// import { listTodos } from './src/graphql/queries';
// import { onCreateTodo } from './src/graphql/subscriptions';

// Amplify.configure(amplifyconfig);

// const client = generateClient();

// async function fetchCountTodos() {
//     try {
//         const value=[];
//         for(let i=0;i<5;i++){
//             let response = await client.graphql({
//                 query: listTodos,
//                 variables: {
//                     filter: {name:'Use AppSync'},
//                     limit: null, // 取得するアイテムの数を制限する場合
//                     nextToken: null // ページネーションのためのトークンなど
//                   }
//             });
//             value[i]=response.data.listTodos.items.length 
//             console.log(response.data.listTodos.items.length)
//         }
//         return value; 
//     } catch (e) {
//         console.log('Something went wrong', e);
//     }
// }
// async function fetchAndDrawGraph() {
//     try {
//         const value = await fetchCountTodos();
//         console.log(value);

//         var pieData = [
//             {
//                 value: 100,            // 値
//                 color:"#F7464A",       // 色
//                 highlight: "#FF5A5E",  // マウスが載った際の色
//                 label: "りんご"        // ラベル
//             },
//             {
//                 value: 100,
//                 color: "#41C44E",
//                 highlight: "#6CD173",
//                 label: "メロン"
//             },
//             {
//                 value: 100,
//                 color: "#FDB45C",
//                 highlight: "#FFC870",
//                 label: "みかん"
//             },
//             {
//                 value: 100,
//                 color: "#AA49B8",
//                 highlight: "#C583CF",
//                 label: "ぶどう"
//             },
//             {
//                 value: 100,
//                 color: "#4D5360",
//                 highlight: "#616774",
//                 label: "その他"
//             }

//         ];

//         var ctx = document.getElementById("graph-area").getContext("2d");
//         window.myPie = new Chart(ctx).Pie(pieData);
//     } catch (e) {
//         console.log('Something went wrong', e);
//     }
// }

// fetchAndDrawGraph();

// const value= await fetchCountTodos();
// console.log(value);
// // document.getElementById('PrintDataEvent').addEventListener('click', () => {

    // ▼グラフの中身
var pieData = [
    {
        value: 100,            // 値
        color:"#F7464A",       // 色
        highlight: "#FF5A5E",  // マウスが載った際の色
        label: "りんご"        // ラベル
    },
    {
        value: 100,
        color: "#41C44E",
        highlight: "#6CD173",
        label: "メロン"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "みかん"
    },
    {
        value: 100,
        color: "#AA49B8",
        highlight: "#C583CF",
        label: "ぶどう"
    },
    {
        value: 30,
        color: "#4D5360",
        highlight: "#616774",
        label: "その他"
    }

];

// ▼上記のグラフを描画するための記述
window.onload = function () {
    var ctx = document.getElementById("graph-area").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieData);
};
// });
