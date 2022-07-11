using BookStore.Models.DataModels;

namespace BookStore.Models.Models
{
    public class RoleModel
    {
        public RoleModel() { }

        public RoleModel(Role role)
        {
            Id = role.Id;
            Name = role.Name;

        }


        public int Id { get; set; }
        public string Name { get; set; }


    }
}