import React from `...`

type CommentContextType = {
    value: string; 
    onChange: (value: string) => void;
}

const CommentContext = React.createContext<CommentContextType>({
    value: ``,
    onChange: () => { }
});

// in app
const [commentValue, setCommentValue] = React.useState(``)

const CommentProvider = CommentContext.Provider;
return (
    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
    </CommentProvider>
)


// if form where it used

const { value, onChange} = useContext(CommentContext) 