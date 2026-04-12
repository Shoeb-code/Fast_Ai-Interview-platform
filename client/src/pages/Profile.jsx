import React, {
  useState,
} from "react";
import {useAuth,} from "../context/AuthContext";

import ProfileHeader from "../components/profile/ProfileHeader";
import CareerCard from "../components/profile/CareerCard";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import SocialLinksCard from "../components/profile/SocialLinksCard";
import EditProfileModal from "../components/profile/EditProfileModal";

const Profile = () => {
  const {user,loading,updateUser,} = useAuth();

  const [editOpen, setEditOpen] =
    useState(false);

  const handleEdit = () => {
    setEditOpen(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl space-y-8">
          <ProfileHeader
            name={user?.fullName}
            email={user?.email}
            role={
              user?.currentRole
            }
            tagline={user?.bio}
            interviews={
              user?.totalInterviews ||
              0
            }
            bestScore={
              user?.bestScore ||
              0
            }
            onEdit={
              handleEdit
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <CareerCard
                role={
                  user?.currentRole
                }
                experience={
                  user?.experience
                }
                course={
                  user?.course
                }
                dreamCompany={
                  user?.dreamCompany
                }
                skills={
                  Array.isArray(
                    user?.skills
                  )
                    ? user.skills.join(
                        ", "
                      )
                    : user?.skills
                }
                goal={
                  user?.objective
                }
              />

              <ProfileInfoCard
                fullName={
                  user?.fullName
                }
                email={
                  user?.email
                }
                phone={
                  user?.phone
                }
                location={
                  user?.location
                }
                website={
                  user?.website
                }
                bio={user?.bio}
                skills={
                  Array.isArray(
                    user?.skills
                  )
                    ? user.skills.join(
                        ", "
                      )
                    : user?.skills
                }
                objective={
                  user?.objective
                }
              />
            </div>

            <div className="space-y-6">
              <SocialLinksCard
                linkedin={
                  user?.linkedin
                }
                github={
                  user?.github
                }
                leetcode={
                  user?.leetcode
                }
                portfolio={
                  user?.portfolio
                }
                resume={
                  user?.resumeUrl
                }
              />
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={editOpen}
        onClose={() =>
          setEditOpen(false)
        }
        profile={user}
        setProfile={
          updateUser
        }
      />
    </>
  );
};

export default Profile;