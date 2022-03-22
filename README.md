## Vuetify2のインストール
```
Vuetifyを使用することでcssをコーディングすることなく、ボタンやハンバーガメニュー、タブなどWebサイトに最低限必要な機能を実装することができます。

また、レスポンシブ対応についてもcssなしで実現できます。
```
- コマンド
`vue add vuetify`
  - Still proceed ? y

ときプリセットは何を使用するかと確認されるのですが、「Default」を選択

- 完了
### 注意点
```
Vuetifyのコンポーネントは必ずv-app要素で囲む必要があります。
vue-routerを使用するようなメインコンポーネントについては、v-contents要素で囲む必要があります。

```
- グリッドシステムのレイアウト構造
```
Vuetifyのグリッドシステムはbootstrapのグリッドシステムに準拠
<v-container>
  <v-row>
    <v-col></v-col>
  </v-row>
</v-container>

```




# simple-vue-website-sample

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### push TEST
- push のテスト



# 最初に行ったインストール(メモ)
node -v

- vue-cli4系のインストール
`npm install -g @vue/cli@4.3.0`
`vue create simple-vue-website-sample`
```
今回は手動設定ができる「Manually select features」を選択します。
「Babel」と「CSS Pre-processors」と「Linter/Formatter」「vuex」「Router」を選択します。
Sassのコンパイラは「dart-sass」
「ESLint + Standard config」

```
