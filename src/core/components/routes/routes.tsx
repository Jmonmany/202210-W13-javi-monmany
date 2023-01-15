import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

const Home = lazy(() => import('../../../features/pages/home/home'));
const Characters = lazy(
    () => import('../../../features/pages/characters/characters')
);

export function AppLazyRoutes({ items }: { items: MenuItems }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={''} element={<Home></Home>}></Route>
                <Route path={items[0].path} element={<Home></Home>}></Route>
                <Route
                    path={items[1].path}
                    element={<Characters></Characters>}
                ></Route>
                <Route
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
