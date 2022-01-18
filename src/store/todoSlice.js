import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async function(_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')

            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json()
            data.map(cards => cards.liked = false)

            return data
        } catch (error) {
            return rejectWithValue(error.masage)
        }

    }
)


/*const initialState = {
    cards: [{
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
            "albumId": 1,
            "id": 9,
            "title": "qui eius qui autem sed",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
            "albumId": 1,
            "id": 10,
            "title": "beatae et provident et ut vel",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        },
    ]
}*/

//initialState.cards.map(card => card.liked = false)

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        status: null,
        error: null,
    },
    reducers: {
        toggleLike(state, action) {
            const toggledLike = state.cards.find(card => card.id === action.payload.id);
            toggledLike.liked = !toggledLike.liked;
        },

        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchCards.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.status = 'resolved';
            console.log(action);
            state.cards = action.payload;

        },
        [fetchCards.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const {
    toggleLike,
    deleteCard
} = cardSlice.actions;

export default cardSlice.reducer;