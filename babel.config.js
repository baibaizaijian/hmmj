module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // 制定样式路径
      style: (name) => `${name}/style/less`
    }, 'vant']
  ]
}
