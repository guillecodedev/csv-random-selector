import { languages, fallbackLng } from '../i18n/settings'
import Home from './components/Home'


export default async function Page({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng

  return (
    <>
      <Home lng={lng} />
    </>
  )
}
