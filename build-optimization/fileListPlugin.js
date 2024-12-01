/*
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-08-30 10:35:57
 * @LastEditTime: 2023-09-28 18:19:58
 */
class FileListPlugin {
    apply(compiler){
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback)=>{
            var filelistStr = 'In this build:\n\n';
            // 遍历所有编译过的资源文件，对于每个文件名称，都添加一行内容。
            // compilation.assets 是一个对象，键为文件名！ 值为文件的描述对象（source 内容、size 大小）！
            for (var filename in compilation.assets) {
                // filelistStr += '- ' + filename + '\n';

                if (compilation.assets.hasOwnProperty(filename)) {
                    const asset = compilation.assets[filename]; // 取得 文件名对应的 文件的描述对象
                    let assetSize = asset.size(); // 获取资产大小
                    // const assetSource = asset.source(); // 获取资产源码

                    filelistStr += '- ' + `Filename: ${filename}` + '      ';
                    filelistStr += '- ' + `Size: ${assetSize} bytes` + '\n';
                    // filelistStr += '- ' + `Source:\n ${assetSource}` + '\n\n';
                    // 打印资产信息
                    console.log(`Filename: ${filename}`);
                    console.log(`Size: ${assetSize} bytes`);
                    // console.log(`Source:\n${assetSource}`);
                }
            }
            console.log('compilation.assets --- ', compilation.assets)            

            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            // 同样的，键为文件名！ 值为文件的描述对象（source 内容、size 大小）！输出资源！
            compilation.assets['filelist.md'] = {
                source: function() {
                    return filelistStr;
                },
                size: function() {
                    return filelistStr.length;
                }
            };
            callback();
        })
    }
}
module.exports = FileListPlugin
