import {
    createStyles,
    Header,
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons';
import groupITLogo from '../../assets/groupIT.png';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
        }),
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    box: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
    }
}));

interface HeaderUnLoggedProps {
    toggleColorScheme: () => void;
}

export default function HeaderUnLogged( { toggleColorScheme }: HeaderUnLoggedProps ) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    return (
        <Box pb={0} className={classes.box}>
            <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>

                    <Image src={groupITLogo} width={110} height={35} alt="GroupIT Logo" />

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <a href="#" className={classes.link}>
                            Inicio
                        </a>
                        <a href="#" className={classes.link}>
                            Sobre Nosotros
                        </a>
                        <a href="#" className={classes.link}>
                            Contactanos
                        </a>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <Button variant="default">Iniciar Sesion</Button>
                        <Button>Crear Cuenta</Button>
                        {theme.colorScheme === 'dark' ? <IconSun size={18} onClick={toggleColorScheme}/> : <IconMoonStars size={18} onClick={toggleColorScheme}/>}
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        Inicio
                    </a>
                    <a href="#" className={classes.link}>
                        Sobre Nosotros
                    </a>
                    <a href="#" className={classes.link}>
                        Contactanos
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Iniciar Sesion</Button>
                        <Button>Crear Cuenta</Button>
                        {theme.colorScheme === 'dark' ? <IconSun size={18} onClick={toggleColorScheme}/> : <IconMoonStars size={18} onClick={toggleColorScheme}/>}
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}