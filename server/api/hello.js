let count = 0;
const runtimeConfig = useRuntimeConfig()
let test = runtimeConfig.token;

export default defineEventHandler(() => {
    count++;
    return {
      title: 'Hello World',
      count: count,
      env: test,
    }
})
