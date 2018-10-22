const getter = {
    remdList: state => {
        return {
            one: state.remdList.slice(0,3),
            two: state.remdList.slice(3)
        }
    },
    newSong: state => state.newSong,
    rank: state => state.rank,
    hotWord: state => state.hotWord,
    searchResult: state => state.searchResult,
};

export default getter
