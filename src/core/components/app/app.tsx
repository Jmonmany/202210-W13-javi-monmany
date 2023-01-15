import { Layout } from '../layout/layout';
import { MenuItems } from '../../types/menu';
import { AppLazyRoutes } from '../routes/routes';
export function App() {
    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/characters', label: 'Characters' }
    ];
    return (
        <>
            <Layout items={items}>
                <AppLazyRoutes items={items}></AppLazyRoutes>
            </Layout>
        </>
    );
}
