# Lifecycle hoos

- constructor - pierwszy uruchamiany kod, jeszcze przed montowaniem komponentu, sluzy do inicjalizacji stanu. w komponentach funkcjonalnych wystarczy uzyc useState
- render() - renderuje komponent, wykonuje kod jsx, nie mo¿na w niej zmieniac stanu
- componentDidMount() - wykonuje sie gdy komponent zostal wyrenderowany, czyli zaraz po zakonczeniu render(). mozna tutaj, np. pobierac dane z api. przypomina "ngOnInit" w angularze
- sholudComponentUpdate(nextProps, nextState) - zwraca true lub false, decyduje czy komponent ma byc ponownie wyrenderowany. uruchamia sie gdy w props lub state nastepuje zmiana. mozna jej uzyc do blokowania zmian w komponencie, np. autoryzacji. przypomina cos w rodzaju "przed ngOnChanges" w angularze
- componentDidUpdate(prevProps, prevState, snapshots) - uruchamia sie po aktualizacji komponentu, czyli po ponownym wywolaniu render(). przypomina cos w rodzaju "po ngOnChanges" w angularze
- componentWillUnmount() - wykonuje sie podczas kasowania komponentu, sluzy do sprzatania. przypomina "przed ngOnDestroy" w angularze
- componentDidCatch(error, info) - sluzy do przechwytywania bledow (error) i informacji o komponencie, ktory zglasza blad (info). nie ma tego w funkcjonalnych, ale ma byc dodane