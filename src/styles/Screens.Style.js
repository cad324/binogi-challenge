export const style = (theme) => ({
    content: {
      padding: theme.spacing(4.5),
      width: '-webkit-fill-available',
      height: '100vh'
    },
    searchBar: {
        '& div': {
            borderRadius: `${theme.spacing(4)}px 0 0 ${theme.spacing(4)}px`,
        }
    },
    searchBtn: {
        borderRadius: `0 ${theme.spacing(4)}px ${theme.spacing(4)}px 0`,
        height: theme.spacing(7),
        marginBottom: theme.spacing(3.5),
    },
    title: {
        marginBottom: theme.spacing(1),
        fontWeight: '600'
    },
    emptyMessage: {
        color: '#908b8b'
    },
    cardTitle: {
        fontWeight: '600'
    },
    cardContent: {
        display: 'flex',
        '& img': {
            width: theme.spacing(10),
            borderRadius: theme.spacing(0.5),
            marginRight: theme.spacing(1)
        }
    },
    card: {
        marginBottom: theme.spacing(1)
    },
    resultsSection: {
        height: '75vh',
        overflowY: 'scroll'
    }
})