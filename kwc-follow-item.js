import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * `kwc-follow-item`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KwcFollowItem extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: inline-flex;
                background-color: #ffffff;
                padding: 1px 17px;
                border-radius: 8px;
                width: calc(100% - 34px);
                margin: 8.5px 0;
            }
            .user {
                @apply --layout-horizontal;
                @apply --layout-center;
                @apply --layout-around-justified;
                width: 100%;
                margin: 16px 0;
            }
            .avatar-wrapper {
                @apply --layout-self-start;
                width: 40px;
                height: 40px;
                cursor: pointer;
            }
            .avatar {
                width: 100%;
                height: 100%;
            }
            .user-info {
                flex-grow: 3;
                font-weight: bold;
                padding-left: 16px;
                cursor: pointer;
            }
            .user-info .username {
                color: var(--color-black);
                font-size: 18px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .user-info .level {
                color: var(--color-grey);
                font-size: 16px;
                line-height: 18px;
            }
            .follow-button {
                cursor: pointer;
            }
            .follow-button .follow-icon-wrapper {
                width: 32px;
                height: 25px;
            }
            .follow-button .follow-icon-wrapper .followed-icon,
            .follow-button .follow-icon-wrapper .follow-icon {
                width: 100%;
                height: 100%;
            }
            .follow-button .follow-icon-wrapper .follow-icon {
                fill: var(--color-grey);
            }
            .follow-button .follow-icon-wrapper .follow-icon:hover {
                fill: var(--color-grassland);
            }
            .follow-button .follow-icon-wrapper .followed-icon:hover {
                opacity: 0.8;
            }
        </style>

        <div class="user">
            <div class="avatar-wrapper" on-tap="_onTapUser">
                <iron-image sizing="contain" class="avatar" src="[[avatar]]">
                </iron-image>
            </div>
            <div class="user-info" on-tap="_onTapUser">
                <div class="username">
                    [[username]]
                </div>
                <div class="level">
                    Level [[level]]
                </div>
            </div>
            <div class="follow-button">
                <div class="follow-icon-wrapper">
                    <template is="dom-if" if="[[followed]]">
                        <iron-image sizing="contain" class="followed-icon" src="/assets/icons/followed.svg" on-tap="_onTapFollow">
                        </iron-image>
                    </template>
                    <template is="dom-if" if="[[!followed]]">
                        <div class="follow-icon" on-tap="_onTapFollow">
                            <svg class="follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.97 25.01"><title>Asset 47</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_4" data-name="Layer 4"><path class="cls-1" d="M17,25a78.41,78.41,0,0,1-11-.77A5.74,5.74,0,0,1,.88,19.64,29.2,29.2,0,0,1,0,12.5,28.72,28.72,0,0,1,.91,5.36,5.69,5.69,0,0,1,6,.77a79.26,79.26,0,0,1,22,0,5.74,5.74,0,0,1,5.07,4.59h0A29.25,29.25,0,0,1,34,12.51a28.73,28.73,0,0,1-.91,7.14A5.69,5.69,0,0,1,28,24.24,79.85,79.85,0,0,1,17,25ZM17,2a78,78,0,0,0-10.76.75,3.71,3.71,0,0,0-3.4,3.11A26.7,26.7,0,0,0,2,12.5a27.17,27.17,0,0,0,.82,6.66,3.74,3.74,0,0,0,3.41,3.1,77.21,77.21,0,0,0,21.49,0,3.71,3.71,0,0,0,3.4-3.11A26.73,26.73,0,0,0,32,12.5a27.21,27.21,0,0,0-.82-6.65,3.74,3.74,0,0,0-3.41-3.1A76.51,76.51,0,0,0,17,2Z"></path><path class="cls-1" d="M9.33,11V9a.52.52,0,0,1,.16-.38.55.55,0,0,1,.39-.16h.89a.55.55,0,0,1,.39.16.52.52,0,0,1,.16.38v2a.56.56,0,0,0,.55.55h2a.52.52,0,0,1,.38.16.55.55,0,0,1,.16.39V13a.55.55,0,0,1-.16.39.52.52,0,0,1-.38.16h-2a.56.56,0,0,0-.55.55v2a.52.52,0,0,1-.16.38.55.55,0,0,1-.39.16H9.88a.55.55,0,0,1-.39-.16.52.52,0,0,1-.16-.38v-2a.56.56,0,0,0-.55-.55h-2a.51.51,0,0,1-.47-.27A.53.53,0,0,1,6.23,13v-.89a.55.55,0,0,1,.16-.39.52.52,0,0,1,.38-.16h2A.56.56,0,0,0,9.33,11Z"></path><path class="cls-1" d="M26.67,16.91a.94.94,0,0,1-.62.86,11.24,11.24,0,0,1-7.82.06,1,1,0,0,1-.64-.86V16.9a4.15,4.15,0,0,1,4.07-3.82,3,3,0,0,1-2.33-3A3,3,0,0,1,22.13,7a3,3,0,0,1,2.8,3.07,3,3,0,0,1-2.33,3,4.15,4.15,0,0,1,4.07,3.82Z"></path></g></g></svg>
                        </div>
                    </template>
                </div>
            </div>
        </div>  
`;
  }

  static get is() { return 'kwc-follow-item'; }
  static get properties() {
      return {
          username: String,
          level: Number,
          avatar: String,
          followed: {
              type: Boolean,
              value: false,
          }
      };
  }
  _onTapFollow (e) {
      let eventName = 'follow',
          eventData = { bubbles: false, detail: this.username };
      if (this.followed) {
          eventName = 'unfollow'
      }
      this.dispatchEvent(new CustomEvent(eventName, eventData));
  }
  _onTapUser (e) {
      this.dispatchEvent(
          new CustomEvent('tap-user', {
              bubbles: false,
              detail: this.username
          })
      )
  }
}

window.customElements.define(KwcFollowItem.is, KwcFollowItem);
