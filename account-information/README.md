
# Install babel dependencies

npm add -D @babel/core babel-loader @babel/preset-env @babel/preset-react --legacy-peer-deps

# Add .babelrc
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}