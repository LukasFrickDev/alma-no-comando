import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type UIState = {
  mobileMenuOpen: boolean
  activeSection: string
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeSection: '',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenuOpen = true
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
  },
})

export const { openMobileMenu, closeMobileMenu, setActiveSection } = uiSlice.actions

export default uiSlice.reducer
