import { Paper, MantineProvider, ColorSchemeProvider, ColorScheme, createStyles, Title, Text, Button, Image, Group } from "@mantine/core"
import HeaderUnLogged from "../headerUnLogged/headerUnLogged"
import groupITLaptop from '../../assets/groupITLaptop.png'
import groupITPlanning from '../../assets/groupITPlanning.png'

const useStyles = createStyles((theme) => ({

    background: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
    },

    bluePaper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingTop: '5vh',
        width: '100%',
        height: '75vh',
        borderRadius: 0,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
        background: theme.fn.linearGradient(270, "rgba(40,0,189,0.9836309523809523) 70%, rgba(20,4,138,0.9836309523809523) 82%, rgba(0,8,89,1) 97%")
    },

    imageContainerPaper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '75vw',
        height: '75vh',
        color: theme.colorScheme === 'light' ? theme.colors.dark[0] : theme.colors.gray[7],
        background: theme.colorScheme === 'light' ? theme.colors.white : theme.colors.dark[5],
        margin: 'auto',
        transform: 'translateY(-25%)',
    },

    landingTitleText: {
        color: theme.colors.gray[2],
        lineHeight: '6vh',
        marginBottom: '3vh',
        fontWeight: 500,
    },

    landingDescText: {
        color: theme.colors.gray[2],
        lineHeight: '3vh',
        marginBottom: '3vh',
    },

    imageContainer: {
        transform: 'translateY(-20%)'
    }

}))

interface HomePageProps {
    colorScheme: ColorScheme
    toggleColorScheme: () => void
}

function HomePage( { colorScheme, toggleColorScheme }: HomePageProps ) {
    const { classes } = useStyles();

    return (
        <ColorSchemeProvider colorScheme={ colorScheme } toggleColorScheme={ toggleColorScheme }>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                <div className={classes.background}>
                    <HeaderUnLogged toggleColorScheme={toggleColorScheme}/>
                    <Paper className={classes.bluePaper}>
                        <Title order={1} size={50} align="center" className={classes.landingTitleText}>Planifica y ejecuta tus eventos de <br/> una forma eficiente y fácil</Title>
                        <Text size={20} align="center" className={classes.landingDescText}>¡Te brindamos la posibilidad de contactarte con proveedores y distintas <br/> opciones que facilitaran tu organización! </Text>
                        <Button color="#7A82D9" size="md">Empieza a Crear</Button>
                    </Paper>
                    <Paper radius={"lg"} className={classes.imageContainerPaper}>
                        <Group position="center" className={classes.imageContainer}>
                            <Image src={groupITLaptop} alt="GroupIT" height={560} width={1000}/>
                            <Image src={groupITPlanning} alt="Planning" height={125} width={700}/>
                        </Group>
                    </Paper>
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default HomePage