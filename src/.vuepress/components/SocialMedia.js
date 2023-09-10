import { computed, defineComponent, h } from "vue";
import { entries } from "vuepress-shared/client";
import { icons } from "@temp/theme-hope/socialMedia";
import { usePure } from "@theme-hope/composables/index";
import { useBlogOptions } from "@theme-hope/modules/blog/composables/index";
import "../styles/social-media.scss";
import Qrcode from "./Qrcode.vue";
export default defineComponent({
    name: "SocialMedia",
    setup() {
        const blogOptions = useBlogOptions();
        const isPure = usePure();

        const query2Obj = (url) => {
          if (url.indexOf('?') === -1) {
            return {url}
          }
          const obj = {};
          const reg = /\?([^#]*)(?:#.*)?$/;
          const [, query] = url.match(reg) || [];
          query.split("&").forEach((item) => {
            const [key, val] = item.split("=");
            obj[key] = decodeURIComponent(val);
          });
          return obj;
        };

        const mediaLinks = computed(() => {
            const config = blogOptions.value.medias;
            return config
                ? entries(config).map(([media, url]) => {
                  const obj = query2Obj(url);
                  return {
                    name: media,
                    icon: icons[media],
                    url:obj.url,
                    account: obj.account,
                    qrcodeImg:obj.qrcodeImg
                  }
                })
                : [];
        });
        return () => mediaLinks.value.length
            ? h("div", { class: "vp-social-medias" }, mediaLinks.value.map(({ name, icon, url, account,qrcodeImg }) => {
              if (qrcodeImg) {
                return h(Qrcode,{
                  url: qrcodeImg,
                  icon,
                  name:{Wechat:'微信'}[name],
                })
              }else {
                return h("a", {
                  class: "vp-social-media",
                  href: url,
                  rel: "noopener noreferrer",
                  target: "_blank",
                  "aria-label": account||name,
                  ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
                  innerHTML: icon,
                })
              }
            }))
            : null;
    },
});
