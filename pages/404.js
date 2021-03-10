import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import classes from '../public/scss/error.module.scss'


export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={classes.error}>Error 404</h1>
            <p>PLease <Link href={`/`}><a>go back</a></Link> to Safety</p>
        </MainLayout >
    )
}