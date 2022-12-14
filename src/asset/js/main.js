export default function assetUrl(url){
    const orgin = window.location.origin;
    return orgin+"/"+url;
}
