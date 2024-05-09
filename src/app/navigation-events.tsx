'use client';

import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function NavigationEvents() {
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    const _push = router.push.bind(router);
    console.log('i own push')

    router.push = (href, options) => {
      console.log('about to change route', href, document.getElementsByTagName('h1')[0].innerText)
      // @ts-ignore
      window.intellimize.ready(() => {
        console.log('calling activate()', pathname, document.getElementsByTagName('h1')[0].innerText)
        // @ts-ignore
        window.intellimize.activate();
      });

      _push(href, options);
    };
  }, [])

  useEffect(() => {
    console.log('route changed', pathname, document.getElementsByTagName('h1')[0].innerText);
    // @ts-ignore
    // window.intellimize.ready(() => {
    //   console.log('calling activate()', pathname)
    //   // @ts-ignore
    //   window.intellimize.activate();
    // });
  }, [pathname])

  return null
};