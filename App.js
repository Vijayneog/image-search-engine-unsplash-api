import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'
import ImageList from './imageList'
class App extends React.Component

{
 state={images :[] };

     onSearchSubmit = async (val) =>
    {
            const response =  await unsplash.get('/search/photos',{
            params:{query:val}
         }); 

     this.setState({images: response.data.results});

        };

render()
    {
        return (
                    <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar  onSubmit={this.onSearchSubmit}/>
                    <h1>Found:{this.state.images.length} images</h1>
                   <ImageList image={this.state.images}/>
                    </div> 
                );
    };
};

export default App;
