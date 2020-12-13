import React from "react";

function GroupFilter() {
  return (
    <div>
      <form onChange={handleGroupFilter}>
        <label>Vegetal</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Vegetal"
          name="Vegetal"
          id=""
        />
        <label>Alcohol</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Alcohol"
          name="Alcohol"
          id=""
        />
        <label>Sulphur</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Sulphur"
          name="Sulphur"
          id=""
        />
        <label>Dairy</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Dairy"
          name="Dairy"
          id=""
        />
        <label>Floral</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Floral"
          name="Floral"
          id=""
        />
        <label>Fruity</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Fruity"
          name="Fruity"
          id=""
        />
        <label>Phenol</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Phenol"
          name="Phenol"
          id=""
        />
        <label>Pungent</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Pungent"
          name="Pungent"
          id=""
        />
        <label>Malliard</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Malliard"
          name="Malliard"
          id=""
        />
        <label>Terpene</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Terpene"
          name="Terpene"
          id=""
        />
        <label>Marine</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Marine"
          name="Marine"
          id=""
        />
        <label>Sour</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Sour"
          name="Sour"
          id=""
        />
        <label>Savoury</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Savoury"
          name="Savoury"
          id=""
        />
      </form>
    </div>
  );
}

export default GroupFilter;
