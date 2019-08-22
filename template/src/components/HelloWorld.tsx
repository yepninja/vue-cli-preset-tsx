import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './HelloWorld.css?module'

interface Props {
  msg: string
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;

  render() {
    return (
      <div class={styles.hello}>
        <h1>{ this.msg }</h1>
        <p>
          ...
        </p>
      </div>
    )
  }
}