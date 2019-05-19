module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup', 'sql'],
        plugins: ['line-numbers'],
      },
    ],
  ],
};
