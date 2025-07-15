import { createIntegration, createComponent } from '@gitbook/runtime';
import React from 'react'; // ou l'import de votre librairie de rendu

const MapComponent = createComponent({
  componentId: 'map',
  initialState: { zoom: 10, // zoom initial, coordonnées etc.
                  center: { lat: 48.8566, lng: 2.3522 } },
  action: async (previous, action) => {
    switch (action.action) {
      // Mettez à jour l'état par exemple pour centrer une nouvelle position
      case 'updateCenter':
        return { state: { center: action.center } };
      default:
        return {};
    }
  },
  render: async ({ state }) => {
    // Utilisez votre librairie de cartographie préférée pour afficher la carte.
    // Ici, nous utilisons un rendu JSX fictif pour illustrer.
    return (
      <block>
        <div style={{ height: '400px', width: '100%' }}>
          {/* Votre composant Map ici, par exemple via <Map lat={state.center.lat} lng={state.center.lng} zoom={state.zoom} /> */}
          Carte centrée sur lat: {state.center.lat}, lng: {state.center.lng}
        </div>
      </block>
    );
  }
});

export default createIntegration({
  components: [MapComponent]
});
