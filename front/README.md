# front

### component
<pre>
src
├── component
│        ├── parts     //ロジックなしのUIコンポーネント
│        ├── templates     //UIコンポーネントを組み合わせる
│        ├── views     //templatesにデータを渡す
│        └── pages     //ページ表示
├── App.js
├── index.css
└── index.js
</pre>

API 通信	グローバル State	Style	依存関係
Parts	×	×	○	parts
Templates	△	○	○	parts, templates
Views	○（client）	○	△	parts, templates
Pages	○（ssr）	×	×	views
|             |  API  | state  |  style  | 依存関係          
| ----------- | ----- | ------ | ------- | ---------------- 
|  parts      |  ×    |  ×     |  ○      | parts
|  templates  |  △    |  ○     |  ○      | parts, templates
|  views      |  ○    |  ○     |  △      | parts, templates
|  pages      |  ○    |  ×     |  ×      | views
