export async function getLanguages(){
    const res = await fetch("https://asr.api.speechmatics.com/v1/discovery/features");
    if(!res.ok){
        throw new Error("Languages could not be loaded");
    }
    const {metadata: data} = await res.json();
    const languages =  Object.entries(data.language_pack_info).map(([code, info]) => ({
        code, // Short code like 'en', 'es', etc.
        description: info.language_description
    }));

    return languages;
}