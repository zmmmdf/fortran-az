
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  toc: {
    title: "Bu səhifədə"
  },
  search: {
    placeholder: "Səhifədə axtar..."
  },
  navigation: true,
  gitTimestamp: 'Son dəfə Dekabr 2024  tarixində redaktə edilib',
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  logo: <span>fortran/az</span>,
  project: {
    link: 'https://github.com/zmmmdf/fortran-az',
  },
  chat: {
    link: 'https://youtube.com/@zmmmdf',
    icon: (
      <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" style={{height:"25px"}}/>
      </>
    )
  },
  docsRepositoryBase: 'https://github.com/zmmmdf/fortran-az',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()}❤️{' '}
        <a href="https://nextra.site" target="_blank">
          Ziya M.
        </a>
      </span>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: 'Fortran Dakumentasiya | Ziya Mammadov'
      }
    }
  },
}

export default config
