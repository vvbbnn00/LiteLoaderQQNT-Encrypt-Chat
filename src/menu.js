export const pluginMenuHTML = `
<div class="config-menu config_view">
    <section class="path">
    <h1>主要配置</h1>
    <div class="wrap">
        <div class="list">
            <div class="vertical-list-item top-box">
                <div class="left-part">
                    <h2>配置密钥</h2>
                    <div style="display: flex; flex-direction: column">
                        <span class="secondary-text">密钥用于加密和解密信息，必须双方密钥一致才可以正常通信</span>
                    </div>

                </div>
                <input class="q-input__inner q-input__inner--clearable custom-input"
                       type="text" id="ec-key-input" placeholder="默认20040821">
            </div>
            <hr class="horizontal-dividing-line"/>
            <div class="vertical-list-item" style="display: flex; flex-direction: column">
                <h1>使用方法：打开聊天窗口，点击输入栏上方右侧的加密图标即可切换是否加密。</h1>
                <h2>目前全局共用一个密钥，单独用户&群密钥开发中！后续也将增加主题色修改等功能。</h2>
            </div>
            <hr class="horizontal-dividing-line"/>
            <div class="vertical-list-item">
                <h1>目前加密图片的缓存在插件目录/src/assests/decryptedImgs内。</h1>
            </div>
            <hr class="horizontal-dividing-line"/>
            <div class="vertical-list-item" style="display: flex; flex-direction: column">
                <h1>按Ctrl+E可快捷切换EC状态</h1>
            </div>
        </div>
    </div>
    </section>
    
    <style>
          .custom-input{
            color: white;
          }
    
          .q-input__inner{
          border-radius: 2px;
          border: 1px solid #ccc;
            padding: 4px;
            font-size: 14px;
          }
          .left-part{
          display: flex;
          flex-direction: column;
          }
          
          .bq-icon {
            height:16px;
            width:16px;
          }
          
          /* 通用 */
          .config_view {
              margin: 20px;
          }
          
          .config_view h1 {
              color: var(--text_primary);
              font-weight: var(--font-bold);
              font-size: min(var(--font_size_3), 18px);
              line-height: min(var(--line_height_3), 24px);
              padding: 0px 16px;
              margin-bottom: 8px;
          }
          
          .config_view .wrap {
              /* Linux样式兼容：--fg_white */
              background-color: var(--fill_light_primary, var(--fg_white));
              border-radius: 8px;
              font-size: min(var(--font_size_3), 18px);
              line-height: min(var(--line_height_3), 24px);
              margin-bottom: 20px;
              overflow: hidden;
              padding: 0px 16px;
          }
          
          .config_view .vertical-list-item {
              margin: 12px 0px;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          
          .config_view .horizontal-dividing-line {
              border: unset;
              margin: unset;
              height: 1px;
              background-color: rgba(127, 127, 127, 0.15);
          }
          
          .config_view .vertical-dividing-line {
              border: unset;
              margin: unset;
              width: 1px;
              background-color: rgba(127, 127, 127, 0.15);
          }
          
          .config_view .ops-btns {
              display: flex;
          }
          
          .config_view .hidden {
              display: none !important;
          }
          
          .config_view .disabled {
              pointer-events: none;
              opacity: 0.5;
          }
          
          .config_view .secondary-text {
              color: var(--text_secondary);
              font-size: min(var(--font_size_2), 16px);
              line-height: min(var(--line_height_2), 22px);
              margin-top: 4px;
          }
          
          .config_view .wrap .title {
              cursor: pointer;
              font-size: min(var(--font_size_3), 18px);
              line-height: min(var(--line_height_3), 24px);
          }
          
          .config_view .wrap .title svg {
              width: 1em;
              height: 1em;
              transform: rotate(-180deg);
              transition-duration: 0.2s;
              transition-timing-function: ease;
              transition-delay: 0s;
              transition-property: transform;
          }
          
          .config_view .wrap .title svg.is-fold {
              transform: rotate(0deg);
          }
          
          
          /* 模态框 */
          .config_view .modal-window {
              display: flex;
              justify-content: center;
              align-items: center;
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
              background-color: rgba(0, 0, 0, 0.5);
          }
          
          .config_view .modal-dialog {
              width: 480px;
              border-radius: 8px;
              /* Linux样式兼容：--fg_white */
              background-color: var(--bg_bottom_standard, var(--fg_white));
          }
          
          .config_view .modal-dialog header {
              font-size: 12px;
              height: 30px;
              line-height: 30px;
              text-align: center;
          }
          
          .config_view .modal-dialog main {
              padding: 0px 16px;
          }
          
          .config_view .modal-dialog main p {
              margin: 8px 0px;
          }
          
          .config_view .modal-dialog footer {
              height: 30px;
              display: flex;
              justify-content: right;
              align-items: center;
          }
          
          .config_view .modal-dialog .q-icon {
              width: 22px;
              height: 22px;
              margin: 8px;
          }
          
          
          /* 版本号 */
          .config_view .versions .wrap {
              display: flex;
              justify-content: space-between;
              padding: 16px 0px;
          }
          
          .config_view .versions .wrap>div {
              flex: 1;
              margin: 0px 10px;
              border-radius: 8px;
              text-align: center;
          }
          
          
          /* 数据目录 */
          .config_view .path .path-input {
              align-self: normal;
              flex: 1;
              border-radius: 4px;
              margin-right: 16px;
              transition: all 100ms ease-out;
          }
          
          .config_view .path .path-input:focus {
              padding-left: 5px;
              background-color: rgba(127, 127, 127, 0.1);
          }
          
          /* 选择框容器 */
          .config_view .list-ctl .ops-selects {
              display: flex;
              gap: 8px;
          }
          

          @media (prefers-color-scheme: light) {
              .text_color {
                  color: black;
              }
          }
          
          @media (prefers-color-scheme: dark) {
              .text_color {
                  color: white;
              }
          }

        </style>
</div>
`