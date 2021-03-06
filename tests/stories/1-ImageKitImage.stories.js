import IKImage from '../../src/components/IKImage.vue';

export default {
  title: 'IKImage',
};

const publicKey = process.env.VUE_APP_PUBLIC_KEY;

let urlEndpoint = process.env.VUE_APP_URL_ENDPOINT;
if(urlEndpoint[urlEndpoint.length-1] === "/")
    urlEndpoint = urlEndpoint.slice(0,urlEndpoint.length-1);

let path = "/default-image.jpg";
  if(path[0] === "/")
    path = path.split("/")[1];

const src = `${urlEndpoint}${path}`;

export const imageWithSrc = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src=${src}/>`,
});

export const imageWithPath = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${path}/>`,
});

export const imageWithLQIP = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src=${src} v-bind:lqip="{active:true,threshold:20}"/>`,
});

export const imageWithNoPublicKey = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="" urlEndpoint=${urlEndpoint} src=${src}/>`,
});

export const imageWithNoUrlEndpoint = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint="" src=${src}/>`,
});
