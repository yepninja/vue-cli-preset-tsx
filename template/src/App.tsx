import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld';

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <img alt="Vue logo" src={require('./assets/logo.png')} />
        <HelloWorld msg1="Welcome to Your Vue.js + TypeScript App"/>
      </div>
    )
  }
}