export const style = (theme) => ({
    drawer: {
      width: theme.spacing(23)
    },
    drawerPaper: {
      backgroundColor: '#87ceeb',
      zIndex: 0,
      position: 'relative !important',
      paddingTop: theme.spacing(2.25)
    },
    nav: {
      '& a': {
        textDecoration: 'none',
        color: '#000',
        display: 'block'
      }
    }
});