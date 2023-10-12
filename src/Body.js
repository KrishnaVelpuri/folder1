import React from 'react'

const Body = () => {
  const user = {
  name: 'DeadPool',
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/05/cfc7a-16530855569896-1920.jpg',
  imageUrl1: 'https://i.pinimg.com/1200x/2a/e3/4c/2ae34c72848e2081a6825b8a46ae7cbf.jpg',
  imageUrl2: 'https://cdn.oneesports.gg/cdn-data/2023/06/Anime_OnePiece_Wallpaper_StrawHatPirates_Complete.jpg',
  imageUrl3: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-67262,resizemode-75,msid-92073673/magazines/panache/after-25-years-beloved-japanese-manga-one-piece-heads-into-final-chapter/one-piece.jpg',
  imageUrl4: 'https://i.pinimg.com/originals/39/fd/e3/39fde3997e91372fb94c384e11fdbc50.jpg'
};
  return (
    <div>
    <table>
    <tr>
    <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{ 
          width: 300,
          height: 200
        }}
    />
    
   <img
    className="avatar"
    src={user.imageUrl1}
    alt={'Photo of ' + user.name}
    style={{ 
      width: 300,
      height: 200
    }}
    />
    
    <img
    className="avatar"
    src={user.imageUrl3}
    alt={'Photo of ' + user.name}
    style={{ 
      width: 300,
      height: 200
    }}
    /> 
    </tr>
    <img
    className="avatar"
    src={user.imageUrl2}
    alt={'Photo of ' + user.name}
    style={{ 
      width: 300,
      height: 200
    }}
    /> 

    <img
    className="avatar"
    src={user.imageUrl4}
    alt={'Photo of ' + user.name}
    style={{ 
      width: 300,
      height: 200
    }}
    />

    </table>
  </div> 
  )
}

export default Body