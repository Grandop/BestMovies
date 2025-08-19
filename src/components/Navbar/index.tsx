import * as S from './styles'

interface NavbarProps {
  search: string
  setSearch: (value: string) => void
}

export const Navbar = ({ search, setSearch }: NavbarProps) => {
  return (
    <S.Bar>
      <S.Logo>🎬 BestMovies</S.Logo>
      <S.Input
        placeholder="Buscar filmes..."
        value={search}
        onChangeText={setSearch}
      />
    </S.Bar>
  )
}
